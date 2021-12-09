module Api::V1
  class LikesController < Api::BaseController
    before_action :find_like, only: %i[ create ]
    
    def create
      like = Like.new(user: current_user, product_id: @product.id) 
      if already_liked?             
        render json: {message: 'NÃO É POSSIVEL DAR MAIS DE UM LIKE'} , status: 201
      else
        liked = @product.likes.create(user: current_user)
      end
    end
    
    private
    def already_liked?
      Like.where(user: current_user, product_id: params[:product_id]).exists?
    end
    
    def find_like
      @product = Product.find(params[:product_id])
    end
  end
end