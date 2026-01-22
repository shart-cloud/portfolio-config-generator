terraform {
  backend "s3" {
    bucket  = "terraform-state-197005419426"
    key     = "week-02/github-actions-oidc/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}