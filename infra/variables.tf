variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "site_bucket_name" {
  type        = string
  description = "Globally unique S3 bucket name for the portfolio site"
}

variable "student_name" {
  type        = string
  description = "Your name for resource tagging"
}