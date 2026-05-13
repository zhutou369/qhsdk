module.exports = function(eleventyConfig) {
  // 定义 blog 集合：自动抓取 posts 文件夹下所有 md 文件
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md");
  });

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};