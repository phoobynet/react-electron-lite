export default function Home() {
  return (
    <div className="flex min-w-full justify-center">
      <div className="mt-[150px] w-1/2 rounded-lg border border-gray-300 p-6 shadow-lg">
        <div className="text-5xl font-bold">Welcome!</div>
        <h5 className="mt-5 text-3xl font-bold">What is this?</h5>
        <p className="mt-3">
          React Electron Lite is basically Vite, React, TailwindCSS, ESLint,
          Prettier, Husky/Lint-Staged with Electron
        </p>

        <p className="mt-3">
          The electron part sits in the{' '}
          <code className="text-blue-500">/main</code> directory. However, the
          electron part is just <strong>JavaScript</strong> to simplify and
          speed up the build configuration. Otherwise, the renderer or frontend
          in the <code className="text-blue-500">/src</code> folder is just{' '}
          <strong>React</strong> and <strong>TypeScript</strong>.
        </p>

        <p className="mt-4 inline-block bg-yellow-200">
          If you just want to put a web app on the desktop, this could be one
          way of doing it.
        </p>
      </div>
    </div>
  )
}
