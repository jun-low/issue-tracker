let issues = [
  {
    id: 1,
    title: 'First issue',
    description: 'Issue description',
  },
];

const getIssues = (req, res) => {
  res.json(issues);
};

const createIssue = (req, res) => {
  const { title, description } = req.body;
  const newIssue = {
    id: issues.length + 1,
    title,
    description,
  };
  issues.push(newIssue);
  res.status(201).json({ message: 'Issue created successfully' });
};

const updateIssueById = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const index = issues.findIndex((issue) => issue.id === parseInt(id));
  if (index !== -1) {
    issues[index].title = title;
    issues[index].description = description;
    res.status(200).json({ message: 'Issue updated successfully' });
  } else {
    res.status(404).json({ error: 'Issue not found' });
  }
};

const deleteIssueById = (req, res) => {
  const { id } = req.params;
  const index = issues.findIndex((issue) => issue.id === parseInt(id));
  if (index !== -1) {
    issues.splice(index, 1);
    res.status(200).json({ message: 'Issue deleted successfully' });
  } else {
    res.status(404).json({ error: 'Issue not found' });
  }
};

module.exports = {
  getIssues,
  createIssue,
  updateIssueById,
  deleteIssueById,
};