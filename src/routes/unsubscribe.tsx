import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export const Route = createFileRoute('/unsubscribe')({
  component: UnsubscribePage,
})

type State =
  | { kind: 'loading' }
  | { kind: 'valid' }
  | { kind: 'already' }
  | { kind: 'invalid'; message: string }
  | { kind: 'submitting' }
  | { kind: 'done' }
  | { kind: 'error'; message: string }

function UnsubscribePage() {
  const [state, setState] = useState<State>({ kind: 'loading' })
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const t = params.get('token')
    if (!t) {
      setState({ kind: 'invalid', message: 'No unsubscribe token provided.' })
      return
    }
    setToken(t)
    fetch(`/email/unsubscribe?token=${encodeURIComponent(t)}`)
      .then(async (res) => {
        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
          setState({ kind: 'invalid', message: data.error ?? 'Invalid token.' })
          return
        }
        if (data.valid) setState({ kind: 'valid' })
        else if (data.reason === 'already_unsubscribed') setState({ kind: 'already' })
        else setState({ kind: 'invalid', message: 'Token is not valid.' })
      })
      .catch(() => setState({ kind: 'invalid', message: 'Could not reach the server.' }))
  }, [])

  const confirm = async () => {
    if (!token) return
    setState({ kind: 'submitting' })
    try {
      const res = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success) setState({ kind: 'done' })
      else if (data.reason === 'already_unsubscribed') setState({ kind: 'already' })
      else setState({ kind: 'error', message: data.error ?? 'Could not unsubscribe.' })
    } catch {
      setState({ kind: 'error', message: 'Could not reach the server.' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full rounded-2xl border border-neutral-200 bg-card p-8 shadow-sm text-center">
        {state.kind === 'loading' && (
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
            <p>Verifying your link…</p>
          </div>
        )}
        {state.kind === 'valid' && (
          <>
            <h1 className="text-2xl font-semibold text-foreground mb-2">Unsubscribe</h1>
            <p className="text-muted-foreground mb-6">
              Click below to stop receiving emails from UbiqPower.
            </p>
            <Button onClick={confirm} size="lg" className="w-full">
              Confirm unsubscribe
            </Button>
          </>
        )}
        {state.kind === 'submitting' && (
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
            <p>Unsubscribing…</p>
          </div>
        )}
        {state.kind === 'done' && (
          <>
            <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
            <h1 className="text-2xl font-semibold text-foreground mb-2">You're unsubscribed</h1>
            <p className="text-muted-foreground">
              You won't receive further emails from us.
            </p>
          </>
        )}
        {state.kind === 'already' && (
          <>
            <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-3" />
            <h1 className="text-2xl font-semibold text-foreground mb-2">Already unsubscribed</h1>
            <p className="text-muted-foreground">This email is already opted out.</p>
          </>
        )}
        {(state.kind === 'invalid' || state.kind === 'error') && (
          <>
            <AlertCircle className="h-10 w-10 text-destructive mx-auto mb-3" />
            <h1 className="text-2xl font-semibold text-foreground mb-2">Something went wrong</h1>
            <p className="text-muted-foreground">{state.message}</p>
          </>
        )}
      </div>
    </div>
  )
}
