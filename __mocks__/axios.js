export default {
  get: jest.fn(() =>
    Promise.resolve({
      posts: [
        {
          resource: {
            created_at: '2016-03-03T20:50:17Z',
            updated_at: '2020-05-05T12:38:26Z',
            resource_id: 'whatsnew',
            module_id: 'GreenMileTrack',
            value: "What's New",
            language_id: 'en',
          },
        },
      ],
    }),
  ),
};
