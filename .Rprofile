source("renv/activate.R")

# fix Hugo version
options(blogdown.hugo.version = "0.80.0")

options(
  blogdown.knit.on_save = TRUE,
  blogdown.method = "html"
)

.serve_site <- function() {
  options(
    blogdown.knit.on_save = FALSE,
    blogdown.method = "custom"
  )

  check_and_rebuild <- function() {
    if (Sys.getenv("BLOGDOWN_SERVING_DIR", "") == "") {
      message("Blogdown is no longer serving the site, not watching for changes")
      return()
    }
    changed <- blogdown:::filter_timestamp(blogdown:::list_rmds(c("content", "static")))
    if (length(changed)) {
      blogdown::build_site(build_rmd = 'timestamp')
    }
    later::later(check_and_rebuild, delay = 5)
  }
  blogdown::serve_site()
  check_and_rebuild()
}
