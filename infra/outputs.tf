output "site_bucket_name" {
  value = aws_s3_bucket.example.id
}

output "website_endpoint" {
  value = aws_s3_bucket_website_configuration.example.website_endpoint
}

output "website_url" {
  value = "http://${aws_s3_bucket_website_configuration.example.website_endpoint}"
}