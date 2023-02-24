def assign_raptors(array)
  yield(array) if block_given?
end

assign_raptors(%w{raven finch velociraptor eagle}) { |_, _, *raptors| p raptors }