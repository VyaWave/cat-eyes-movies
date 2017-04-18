let fs = require('fs');

let fileFs = {
	/**
	 * [通过Promise写入数据]
	 * @param  {String} file [文件名]
	 * @param  {Object} obj  [写入的数据（对象）]
	 * @return {Object}      [Promise对象]
	 */
	writeFileData: (file, obj) => {
	    let promise = new Promise((resolve, reject) => {
        obj = JSON.stringify(obj);
        fs.writeFile("./database/" + file, obj, err => {
            if(err) {
              reject("fail " + err)
            }
            else {
              resolve("write filedata success!");
            }
        });
	    })
	    return promise;
	},

	/**
	 * [通过Promise读取存储的数据]
	 * @param  {String} file [文件名]
	 * @return {Object}      [Promise对象]
	 */
	readFileData: (file) => {
	    let promise = new Promise((resolve, reject) => {
        fs.readFile("./database/" + file, "utf-8", (err, data) => {
          if(err) {
            console.error(err);
            reject("read filedata failed!");
          }else {
            data = JSON.parse(data);
            resolve(data);
          }
        })
	    });
	    return promise;
	}
}

module.exports = fileFs;
