import * as React from "react"

import Container from "@/src/components/atoms/Container"

const SpacePage: React.FC = () => {
  return (
    <section className="h-full overflow-auto rounded-xl border border-white/10 bg-white/10 px-6 py-16 shadow-lg backdrop-blur-lg">
      <Container>
        <p className="text-zinc-400">Select a space from the sidebar</p>
      </Container>
    </section>
  )
}

export default SpacePage
