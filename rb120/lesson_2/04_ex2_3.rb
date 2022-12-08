class Pet
  def run
    'running!'
  end

  def jump
    'jumping!'
  end
end

class Dog < Pet
  def speak
    'bark!'
  end

  def swim
    'swimming!'
  end

  def fetch
    'fetching!'
  end
end

class Cat < Pet
  def speak
    'meow!'
  end
end

=begin
Class heirarchy diagram

                Pet
                - run
                - jump

        Dog           Cat
        - speak       - speak
        - fetch
        - swim

      BullDog
      - swim (can't)


Pet
- run
- jump

        Dog
        - speak
        - fetch
        - swim
                    BullDog
                    - swim (can't)

        Cat
        - speak

=end
