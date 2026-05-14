const getHome = (req, res) => {
    res.send('My backend is working!');
}

const getAbout = (req, res) => {
    res.json({
        name: 'Ifechukwu',
        role:'Backend Engineer in training',
        month: 1
    }
    );
}

const getSkills = (req, res) => {
    res.json({
        skills: ['JavaScript', 'Node.js', 'Express', 'Python']
    });
}


const getStatus = (req, res) => {
    res.json({
        status: 'Online'
    });
}

module.exports = {
    getHome,
    getAbout,
    getSkills,
    getStatus
};