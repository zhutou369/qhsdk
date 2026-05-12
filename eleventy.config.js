module.exports = function(eleventyConfig) {
  // 告诉 11ty：把 admin 文件夹和里面的内容直接拷贝到输出目录
  eleventyConfig.addPassthroughCopy("admin");
  // 如果你有图片文件夹也可以加在这里
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};