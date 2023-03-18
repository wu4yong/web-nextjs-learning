const handler = (req, res) => {
    res.clearPreviewData();
    res.end('Preview mode data cleared.');
}

export default handler;
