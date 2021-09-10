const mail = require("../model/email");
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
        },async emailOnly(req,res){
            console.log("2");
            // const {email} = req.body;
            // if(!email){
            //     return res.status(400).json({message:"Enter Details"});
            // }
            // const res1 = await mail.create(email).then(()=>{
            //     console.log("Done");;
            // }).catch(err=>{
            //     console.log(err);
            // });
        }
    }
}

module.exports = TravelController;