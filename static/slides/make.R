#! /usr/bin/env Rscript

# Run as local job in RStudio!

options(error = NULL)

slides <- dir(pattern = "Rmd$", full.names = TRUE)
slides <- slides[!grepl("template|README|index", slides)]
slides_html <- purrr::map_chr(slides, ~ {
  fs::path_ext(.x) <- "html"
  .x
})

assets <- fs::dir_ls("assets", regexp = "libs", invert = TRUE, recurse = TRUE, type = "file")
assets <- c(assets, fs::dir_ls("R"))

youngest_input <- max(fs::file_info(c(slides, assets))$change_time)
youngest_output <- max(fs::file_info(slides_html)$change_time)

if (youngest_input > youngest_output) {
  message("! rebuilding slides")
  source("R/utils.R")

  message("Removing assets/libs/")
  if (fs::dir_exists("assets/libs'")) fs::dir_delete("assets/libs/")

  check_for <- function(
    src,
    pattern = "_placeholder.*=.*TRUE",
    msg = "Placeholders may be turned on in "
  ) {
    found <- grep(pattern, src, value = TRUE)
    if (length(found)) {
      message(msg, slide)
      for (issue in found) {
        message(paste("Line", which(issue == src), issue, collapse = "\n"))
      }
    }
  }

  for (slide in slides) {
    message("Building ", slide, "...")
    zap_tabs(slide)
    src <- readr::read_lines(slide)
    check_for(src) # placeholders
    check_for(src, "unsplash_bg\\(")
    check_for(src, "FIXME")
    options(placeholder_enable = FALSE, js4shiny_repl_local = FALSE)
    rmarkdown::render(slide, quiet = getOption("render_slides_quietly", TRUE), envir = new.env())
  }

  fs::dir_delete(fs::dir_ls("assets/libs", regexp = "metathis", type = "directory"))

  message("All done!")
}
