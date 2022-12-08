=begin
What is the method lookup path?
  - it's the order in which Ruby will try to find any method which is invoked
  - (e.g., in the current class first, then in included mixins [last included first], then superclasses )

How is it important?
  - It's important for understanding overriding behaviours - i.e., if methods from the current, super, or modules have the same name, the lookup path determines which version will be executed


=end