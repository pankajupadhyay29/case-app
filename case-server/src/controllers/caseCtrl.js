const cases = [
    { id: 1, name: 'Case 1', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
]

const getAll = (req, res) => {
    res.send(cases);
}

module.exports = {
    getAll
}