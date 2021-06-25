# An optional custom script to run before Hugo builds your site.
# You can delete it if you do not need it.
owd <- setwd(here::here("static", "slides"))
on.exit(setwd(owd))

source("make.R")
