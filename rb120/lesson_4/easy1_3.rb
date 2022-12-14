# The method `go_fast` in the module `Speed` invokes the method `#class` on `self`.
# In when `go_fast` is invoked, `self` will refer to the object, and instance of class `Car`.
# Thus, when `#class` is called that object, the class `Car` is returned, which automatically has `to_s` called on it, which returns `'Car'`.
