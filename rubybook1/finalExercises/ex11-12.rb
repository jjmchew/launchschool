require "pry"
contact_data = [
  ["joe@email.com", "123 Main st.", "555-123-4567"],
  ["sally@email.com", "404 Not Found Dr.", "123-234-3454"]
]

contacts = {"Joe Smith" => {}, "Sally Johnson" => {}}

# Expected output:
#  {
#    "Joe Smith"=>{:email=>"joe@email.com", :address=>"123 Main st.", :phone=>"555-123-4567"},
#    "Sally Johnson"=>{:email=>"sally@email.com", :address=>"404 Not Found Dr.",  :phone=>"123-234-3454"}
#  }

map_contact = { "Joe Smith"=> 0, "Sally Johnson"=> 1 }  # need to be careful with use of symbols vs strings as keys
map_data = { email: 0, address: 1, phone: 2 }

contacts.each_key do |k|
  map_data.each do |key, idx|
    contacts[k][key] = contact_data[map_contact[k]][idx]
    # binding.pry
  end
end

p contacts

p contacts["Joe Smith"][:email]
p contacts["Sally Johnson"][:phone]