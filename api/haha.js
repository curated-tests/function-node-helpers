module.exports = (req, res) => {
    res.json({ test: process.env.VERCEL_REGION })
}
