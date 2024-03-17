const controllers = require('../app/controllers/issues.controller');

describe('controllers', () => {
  let issues;

  beforeEach(() => {
    issues = [
      {
        id: 1,
        title: 'First issue',
        description: 'Issue description',
      },
    ];
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getIssues should return the list of issues', () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };

    controllers.getIssues(req, res);

    expect(res.json).toHaveBeenCalledWith(issues);
  });

  test('createIssue should add a new issue', () => {
    const req = {
      body: {
        title: 'New Issue',
        description: 'This is a new issue',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    controllers.createIssue(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ "message": "Issue created successfully" });
  });

});