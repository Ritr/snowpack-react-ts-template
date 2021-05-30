### 启动

```jsx
npm run start
```

### 打包

```jsx
npm run build
```

### 格式化

```jsx
npm run format
```

### 提交前检查

代码提交前会执行.husky/pre-commit文件内的代码，你可以自定义pre-commit的脚本

### 环境变量配置

1. 公共变量

    /src/config/index.ts

2. 开发环境变量

    /src/config/development.ts

3. 生产环境变量

    /src/config/production.ts