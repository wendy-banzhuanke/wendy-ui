const path = require("path");

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: ["style-loader", "css-loader", "less-loader"],
    include: path.resolve(__dirname, "../")
  });
  // (cssRule.test = /\.css$/),
  //   cssRule.use.push({
  //     loader: ["style-loader", "css-loader"],
  //     options: {
  //       implementation: require("css")
  //     }
  //   });

  // cssRule.use.push({
  //   loader: "less-loader",
  //   options: {
  //     implementation: require("less")
  //   }
  // });
  // cssRule.use.push({
  //   loader: "css-loader",
  //   options: {
  //     implementation: require("css")
  //   }
  // });
  // } else {
  //   console.error("No CSS loader rule was found!");
  // }

  // const jsRule = config.module.rules.find(r =>
  //   r.test.toString().includes("js")
  // );
  // if (jsRule) {
  //   const babel = jsRule.use.find(l =>
  //     (l.loader || "").includes("babel-loader")
  //   );
  //   if (babel) {
  //     babel.options.sourceType = "unambiguous";
  //   } else {
  //     console.warn("No babel-loader was found!");
  //   }
  // } else {
  //   console.error("No JS loader was found!");
  // }

  return config;
};
