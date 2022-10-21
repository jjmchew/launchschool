require 'yaml'
MESSAGES = YAML.load_file('calculator_messages.yml')

# search of YAML::load_file returned a result for Module: YAML (Ruby 2.7.0)
# YAML implementation provided by Psych library - look there for detailed docs
# should be able to look in Standard Library, Psych, ::load_file
