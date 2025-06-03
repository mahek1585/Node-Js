const supabase = require("../supabase");

const getStudentList = async function(req,res){
    const result =await supabase.from("students").select();
    console.log({result});

    res.json({
        message:"student list fetched",
        result,
    });
};

const getStudent = async function(req,res){
    const id = req.params.id;
    const result =await supabase.from("students").select().eq("id",id);

    res.json({
        message:"student list fetched",
        result,
    });
};
// add, edit ,and delete
const addStudent = async function (req, res) {
  const result = await supabase.from("students").insert(req.body);
  res.json({
    message: "Student Created",
    result,
  });
};
module.exports = {
    getStudentList,
    getStudent,
    addStudent,
};