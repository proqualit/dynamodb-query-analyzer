import * as express from 'express'
import * as aws from 'aws-sdk'

const app = express()

const port = process.env.PORT || 3001

const dynamoClient = createDynamoDocumentClient()

function createDynamoDocumentClient () {
  return new aws.DynamoDB.DocumentClient({
    region: 'local',
    endpoint: 'http://dynamodb:8000'
  })
}

app.get('/api/table/:table', (req, res) => {
  const table = req.params.table
  const exclusiveStartKeyQueryString = req.query.exclusiveStartKey && (JSON.parse(decodeURIComponent(req.query.exclusiveStartKey)) as aws.DynamoDB.Key)
  const exclusiveStartKey = exclusiveStartKeyQueryString
  return dynamoClient.scan({
    TableName: table,
    ExclusiveStartKey: exclusiveStartKey
  }).promise().then(results => res.send(results))
})

app.listen(port, () => console.log(`Listening on port ${port}`))
