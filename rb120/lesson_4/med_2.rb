class InvoiceEntry
  attr_reader :quantity, :product_name

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    # prevent negative quantities from being set
    @quantity = updated_count if updated_count >= 0 # updated
  end
end

# Need to use `self.quantity` when doing assignment to instance variable `@quantity`.
# There is NO setter method for `@quantity`, so to access and set the instance variable `@quantity` we need to access it directly.
# Even if there was a setter method defined (e.g., via `attr_accessor` or `attr_writer`), we would need to use self.quantity = ... 
