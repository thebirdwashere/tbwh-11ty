const { DateTime } = require("luxon");
const TIME_ZONE = "America/Chicago";

module.exports = function(eleventyConfig) {
    eleventyConfig.setInputDirectory('src');
    eleventyConfig.addPassthroughCopy({ 'static': '/' });
    eleventyConfig.addFilter("asPostDate", (dateObj) => {
     return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_FULL);

    // other config likely here
    });
};

module.exports.config = {
    markdownTemplateEngine: 'njk',
};

