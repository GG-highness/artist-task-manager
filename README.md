# artist-task-manager

> アニメーション・映像制作現場向けアセット管理システム

## 📖 プロジェクト概要

Creative Asset Managerは、アニメーションや映像制作のワークフローを支援するWebアプリケーションです。
アーティストが制作したアセット(画像、動画、3Dモデル等)を効率的に管理し、
チーム間のレビュー・承認フローを円滑にすることを目的としています。

## ✨ 主要機能

### 実装済み機能
現在実装中です。以下の機能を順次開発予定。

### 開発予定機能

**認証・ユーザー管理**
- ユーザー認証(JWT)
- 権限管理

**アセット管理**
- アセット登録(画像ファイルアップロード)
- アセット一覧表示(サムネイル付き)
- タグ機能(手動タグ付け・タグ検索)
- ステータス管理(作業中/レビュー待ち/承認済み)

**コラボレーション**
- 簡易コメント機能
- レビュー・承認ワークフロー

**拡張機能**
- 🔄 バージョン管理(同一アセットの履歴管理)
- 🔄 進捗ダッシュボード
- 🔄 AI自動タグ付け(OpenAI API連携)
- 🔄 詳細な権限管理

## 🛠️ 技術スタック

### フロントエンド
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **State Management**: Recoil (予定)
- **GraphQL Client**: Apollo Client

### バックエンド
- **Framework**: Nest.js
- **Language**: TypeScript
- **ORM**: Prisma
- **API**: GraphQL (Code First)
- **Authentication**: JWT

### データベース
- **DB**: MySQL 8.0
- **Migration**: Prisma Migrate

### インフラ・DevOps
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions (予定)
- **Hosting**: 未定 (Vercel + AWS等を検討)

## 📁 ディレクトリ構成
```
artist-task-manager/
├── backend/              # バックエンド(Nest.js)
│   ├── src/
│   │   ├── modules/     # 機能ごとのモジュール
│   │   ├── common/      # 共通モジュール
│   │   └── config/      # 設定ファイル
│   ├── prisma/          # Prismaスキーマ・マイグレーション
│   └── test/            # テストコード
│
├── frontend/            # フロントエンド(Next.js)
│   ├── app/            # App Router
│   ├── components/     # Reactコンポーネント
│   ├── lib/            # ユーティリティ・Apollo設定等
│   └── types/          # 型定義
│
├── docker-compose.yml  # Docker環境定義
└── README.md           # このファイル
```

## 🚀 環境構築

### 前提条件
- Node.js 18以上
- Docker Desktop (MySQL用)

### バックエンド セットアップ
```bash
cd backend

# 依存パッケージのインストール
npm install

# 環境変数の設定
cp .env.example .env

# 開発サーバー起動（GraphQL スキーマも自動生成されます）
npm run start:dev
```

起動後、http://localhost:3000/graphql でGraphQL Playgroundにアクセスできます。

### フロントエンド セットアップ

**TODO: Issue #3 で記載**

### Docker環境

**TODO: Issue #4 で記載**

## 💻 開発ワークフロー

### ブランチ戦略
```
main (本番環境相当)
  ↑
develop (開発統合環境)
  ↑
feature/[Issue番号]-xxx (機能開発ブランチ)
```

### Issue・PR運用

1. **Issue作成**: 機能・タスクごとにIssueを作成
2. **ブランチ作成**: `feature/[Issue番号]-[機能名]` 形式
3. **実装・コミット**: Conventional Commits形式でコミット
   - 例: `feat: ユーザー認証機能追加 #1`
4. **PR作成**: developブランチへPR作成
5. **レビュー**: コードレビュー実施
6. **マージ**: レビュー承認後にマージ

## 📄 ライセンス

MIT License (ポートフォリオ用途)
