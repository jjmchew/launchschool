class InvoiceEntry
  attr_reader :quantity, :product_name

  def initialize(product_name, number_purchased)
    @quantity = number_purchased
    @product_name = product_name
  end

  def update_quantity(updated_count)
    quantity = updated_count if updated_count >= 0
  end
end

# Need to consider which instance variables should be able to be changed from outside of the class.
# Just changing `attr_reader` to `attr_accessor` will allow code outside the class to change both `@quantity` and `product_name` which might be undesireable.
# Changing `@quantity` directly without using `update_quantity` would circumvent the 'guard' clause preventing an updated_count of 0 from being assigned to quantity.

