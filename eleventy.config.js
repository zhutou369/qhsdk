module.exports = function(eleventyConfig) {
  // 1. 强制定义集合：将 posts 文件夹下的所有 MD 文件自动归类为 "blog"
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md");
  });

  // 2. 静态资源直接拷贝
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("assets");
  
  // 3. 监视文件夹变动
  eleventyConfig.addWatchTarget("./posts/");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};