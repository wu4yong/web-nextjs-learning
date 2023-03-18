
export default function handler(req, res){
    res.setPreviewData({
        user: 'py'
    })
    // res.end('Preview mode enabled');
    res.redirect(req.query.redirect);
}
