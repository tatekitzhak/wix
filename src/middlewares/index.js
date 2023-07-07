const headers = (req, res, next) => {
    const origin = (req.headers.host == 'localhost:8002') ? 'http://localhost:8002' : 'https://mywebsite.com'
    res.setHeader('Access-Control-Allow-Origin', origin)
        .setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        .header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Origin')
        .setHeader('Access-Control-Allow-Credentials', true);
    next()
};

function notFound(req, res, next) {
    res.status(404);
    const error = new Error('Not Found', req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next){
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

module.exports = {
    headers,
    notFound,
    errorHandler
}