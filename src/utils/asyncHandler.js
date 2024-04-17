// const asyncHandler = (fn) => {()=>{}}  // this is just a higher order function.. and we can remove {} like below use

const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next)
    }
}

export { asyncHandler }









// const asyncHandler = (fn) => async (err, req, res, next) => { 
//     try {
//         await fn(err,req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }