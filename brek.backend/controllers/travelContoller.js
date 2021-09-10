const user = require("../model/userdata");
const travelData = require("../model/userTravelData");

function TravelController() {
    return {
        async travelDataPost(req, res) {
            const { FullName, PhoneNumber, Email, CurrentLocation, TravelDestination } = req.body;

            if (!FullName || !PhoneNumber || !Email || !CurrentLocation || !TravelDestination) {
                return res.status(400).json({ message: "Please Enter All Details" });
            } else {
                if (!req.cookies.brekweb) {
                    return res.status(400).send("Login First")
                }
                else {
                    const a = req.cookies.brekweb;
                    const ur = await user.findOne({_id:a});
                    if(!ur){
                        return res.status(400).send("Register First");
                    }
                    else{
                        const x = new travelData({ FullName, PhoneNumber, Email, CurrentLocation, TravelDestination, userId: req.cookies.brekweb });
                        x.save().then(() => {
                            res.status(200).json({message:"Successfully Stored!"})
                        }).catch((e) => {
                            console.log(e);
                        })
                    }
                }
            }
        },async userdata(req,res){
            console.log("hello");
            res.status(200).json({gota:req.rootUser});
            // const user_id = req.cookies.brekweb;
            // console.log(user_id);
            // const data = await user.findOne({_id:user_id});
            // console.log(data);
            // if(!data){
            //     return res.status(400).json({message:"Register First!"});
            // }
            // const name = data.FullName;
            // return res.status(200).json({name});
        }
    }
}

module.exports = TravelController;