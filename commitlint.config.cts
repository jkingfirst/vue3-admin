module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(:\w*:)(?:\s)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
      headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
    },
  },
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [0, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [0, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        '📚 docs',
        '🐛 fix',
        '✨ feat',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: '选择要提交的更改类型',
        enum: {
          '✨ feat': {
            description: '新功能',
            title: 'Features',
            emoji: '✨',
          },
          '🐛 fix': {
            description: '错误修复',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          '📚 docs': {
            description: '仅文档修改',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description: '💎 不影响代码含义的更改（空格、格式、缺少分号等',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description: '📦 既不修复bug也不添加功能的代码更改',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: '🚀 A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description: '🚨 提高性能的代码更改',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description:
              '🛠 影响构建系统或外部依赖项的更改（示例范围：gulp、brocoli、npm）',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description:
              '⚙️ 更改CI配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description: '♻️ 不修改src或测试文件的其他更改',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: '🗑 恢复以前的提交',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description: '此更改的范围是什么（例如组件或文件名）',
      },
      subject: {
        description: '写一个简短的正式描述',
      },
      body: {
        description: '提供更改的详细描述',
      },
      // isBreaking: {
      //   description: '有什么突破性的变化吗？',
      // },
      // breakingBody: {
      //   description:
      //     'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself',
      // },
      // breaking: {
      //   description: ' 描述一下突破性的更改内容',
      // },
      // isIssueAffected: {
      //   description: '更改有解决掉在线的一些问题么？',
      // },
      // issuesBody: {
      //   description:
      //     'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself',
      // },
      // issues: {
      //   description: 'Add issue references (e.g. "fix #123", "re #123".)',
      // },
    },
  },
}

