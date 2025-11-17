package cart

import (
	"context"
	"encoding/json"
	"net/http"

	"github.com/ordinaryteen/feez-go-api/internal/database"
	"github.com/ordinaryteen/feez-go-api/internal/middleware"
)

type AddToCartRequest struct {
	ProductID int64 `json:"product_id"`
	Quantity  int   `json:"quantity"`
}

func HandleAddToCart(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	userID, ok := middleware.GetUserIDFromContext(ctx)
	if !ok {
		http.Error(w, "User ID not found in context", http.StatusInternalServerError)
		return
	}

	var req AddToCartRequest
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	if req.Quantity <= 0 {
		req.Quantity = 1
	}

	// Integrasi ke DB
	sqlQuery := `
		INSERT INTO public.cart_items (user_id, product_id, quantity)
		VALUES ($1, $2, $3)
	`

	_, err := database.DB.Exec(
		context.Background(),
		sqlQuery,
		userID,
		req.ProductID,
		req.Quantity,
	)

	if err != nil {
		http.Error(w, "Failed to add item to cart: "+err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(`{"message": "Item added to cart"}`))
}
