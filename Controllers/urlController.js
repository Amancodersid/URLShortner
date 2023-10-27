const { Url } = require("../Models/UrlModel");
const crypto = require("crypto");

const createShortUrl = async (req, res) => {

    try {
        const { originalUrl } = req.body;
        const urlRegex = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/;
        if (urlRegex.test(originalUrl)) {
            // The URL is valid

                            if (!originalUrl)
                            return res.status(400).json({ status: false, message: "URL is required" });
                        let url = await Url.findOne({ originalUrl });
                        if (url) {
                            return res.send(url);
                        }
                        const shortUrl = crypto.randomBytes(6).toString("hex");
                        
                        const data = await Url.create({
                            originalUrl: originalUrl,
                            shortUrl: `http://localhost:7000/${shortUrl}`,
                        });
                        res.status(200).send({ status: true, message: "Short url", data: data });

          } else {
            // The URL is not valid
            console.log('Invalid URL:', originalUrl);
          }

   
    } catch (error) {
        res.status(500).json({ message: 'Sever error : ' + err.message });
    }

};



const redirect =async(req,res)=>{
  try {
    const{shortUrl} = req.params;
    const url = await Url.findOne({ shortUrl:`http://localhost:7000/${shortUrl}` });
    if (!url) {
        return res.status(404).send({ status:false, message: "no Short Found"});
    }
    res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({ message: 'Sever error : ' + err.message });
  }
}

module.exports = { createShortUrl,redirect };
