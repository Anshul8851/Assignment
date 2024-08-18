const Cards = require("../Models/Card")

exports.getAllCardsInfo = async(req,res)=>{
    try{
        const allCards = await Cards.find({});
        res.status(200).send({
            success:true,
            allCards
        })
    }
    catch(error){
        res.status(500).send({
            status:false,
            message:"Error in Fetching Card Data",
            error:error.message
        })
    }
}

exports.getSpecificCard = async(req,res)=>{
    try{
        const id = req.params.id;
        // console.log(id);
        const allCards = await Cards.find({});
        const card = allCards.filter((card)=>(
            card.title.split(" ").join("").toLowerCase() === id.toLowerCase()
        ))
        // console.log(card[0]);
        if(card.length == 0){
            res.redirect("/cards");
        }
        const requireCard = card[0];
        res.status(200).send({
            success:true,
            requireCard
        })

    }catch(error){
        res.status(500).send({
            status:false,
            message:"Error in Fetching this card details",
            error:error.message
        })
    }
}

exports.addNewCard = async(req,res)=>{
    try{
        const {title,description} = req.body;
        if(!title || !description){
            res.status(500).send({
                status:false,
                message:"Please Provide All Fields"
            })
        }
        const newCard = await Cards.create({
            title,
            description
        })
        res.status(200).send({
            success:true,
            message:"New Card Added Successfully"
        })

    }
    catch(error){
        res.status(500).send({
            status:false,
            message:"Error in Adding New Card Details",
            error:error.message
        })
    }
}

exports.searchCard = async(req,res)=>{
    try {
        const { query } = req.query;

        
        const cards = await Cards.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
            ],
        });

        res.status(200).json(cards);
    } catch (error) {
        res.status(500).send({
            status:false,
            message:"Error in Searching Card ",
            error:error.message
        })
    }
}