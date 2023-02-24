class TextAnalyzer
  FILENAME = '02a.txt'

  def process
    f = File.new(FILENAME)
    text = ""
    f.each_line { |line| text += line }
    f.close

    yield(text)
  end

end

analyzer = TextAnalyzer.new
analyzer.process { |text| puts "#{text.scan(/\n\n[a-zA-Z]/).length + 1} paragraphs" } # process paragraphs
analyzer.process { |text| puts "#{text.scan(/\n/).length + 1} lines" } # process lines
analyzer.process { |text| puts "#{text.split(" ").length} words" } # process words
