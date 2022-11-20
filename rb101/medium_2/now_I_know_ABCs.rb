=begin
input
  - a word
output
  - true / false depending on whether or not the word can be created using the word blocks (see below)

assumptions / constraints:
  - the blocks:
    B:O   X:K   D:Q   C:P   N:A
    G:T   R:E   F:S   J:W   H:U
    V:I   L:Y   Z:M
  - it appears:  only 1 of any given letter in the set, pairing of letters prevents some words from being created

data structure
  - array:  unused_blocks
  - array:  used_blocks
  - string:  given_word

algorithm
  - create 2 arrays - 'unused blocks' and 'used blocks'  =>  only track unused blocks
      - unused blocks will start with all of the blocks
  - iterate through each character of the given word
      - for each character: 
          - if the required block is available, move it to the 'used blocks' array => update, just delete block
          - if the required block is not available, then return false
  - return true if blocks were available for all characters in the given word

=end

def remove_block(char, unused_blocks)
  block_to_delete = ""
  unused_blocks.each do |block|
    block_to_delete = block if block.include?(char.upcase)
  end
  unused_blocks.delete(block_to_delete) unless block_to_delete == ""
end

def block_word?(given_word)
  unused_blocks = %w( B:O   X:K   D:Q   C:P   N:A
                      G:T   R:E   F:S   J:W   H:U
                      V:I   L:Y   Z:M)
  given_word.chars.each do |char|
    if unused_blocks.join.include?(char.upcase)
      remove_block(char, unused_blocks)
    else
      return false
    end
  end
  true
end

# test cases
p block_word?('BATCH') == true
p block_word?('BUTCH') == false
p block_word?('jest') == true