self.addEventListener("message", evt => {
    console.log("got: " + evt.data.msg);
});

//This fails with "Cannot read property './crate/pkg/rust_webpack_bg.wasm' of undefined"
import("../crate/pkg").then(module => {
  module.run();
});

