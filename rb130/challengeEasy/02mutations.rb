class DNA
  def initialize(string)
    @dna = string
  end

  def hamming_distance(string)
    distance = 0
    (0...shorter_length(string)).each do |index|
      distance += 1 if @dna[index] != string[index]
    end
    distance
  end

  private
  def shorter_length(string)
    [@dna.length, string.length].min
  end
end

# p DNA.new("GCATDDDD").hamming_distance("GCAT")



=begin
input
  @dna : reference DNA string
  string : comparison DNA string

output
  integer : the number of times the letters at the same position in the 2 strings do NOT match

rules
  - assume only valid letters provided : just check for equality b/w 2 char at the same positions
  - if 1 string is shorter, compare up to the length of the shorter string

algorithm
  - initialize a "distance" variable at 0
  - iterate indexes from 0 upto length of shorter string
      - compare if 2 characters are equal
          - if not, increment distance by 1
  - return distance
=end


