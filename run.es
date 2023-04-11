//Elasticsearch for VSCode v0.13.3 ria 61,419 (8)


GET /meuindice/_search
{
    "query": {
        "match": {
            "response_code": 200
        }
    }
} 

POST meuindice/logs/_mapping
{
    "properties": {
        "verb": "text",
        "response_code": "int"
    }
}

DELETE meuindice

PUT /meuindice
{
  "mappings": {
    "properties": {
      "response_code":    { "type": "integer" },  
      "verb":  { "type": "keyword"  }   
    }
  }
}


POST /meuindice/_doc
{
    "verb": "GET",
    "response_code": 400
}