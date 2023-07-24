require 'pg'

class DatabasePersistence
  def initialize(logger)
    @db = PG.connect(dbname: 'dbname')
    @logger = logger
  end

  def query(sql, *params)
    @logger.info "#{sql} : #{params}"
    @db.exec_params(sql, params)
  end

  def return_all
    sql = 'SELECT * FROM table;'
    result = query(sql)

    result.map do |tuple|
      {id: tuple['id'], name: tuple['name']}
    end
  end

  def return_one(id)
    sql = <<~SQL
      SELECT * FROM table WHERE id = $1
    SQL
    result = query(sql, id)

    tuple = result.first
    {id: tuple['id'], name: tuple['name']}
  end
end