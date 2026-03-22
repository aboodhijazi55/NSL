import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material'
export default function Modal({ open, onClose, title, subtitle, onConfirm }) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{ className: 'nsl-modal-paper' }}
        >
            <div className="nsl-modal-title">{title}</div>
            {subtitle ? <DialogContent className="nsl-modal-content">{subtitle}</DialogContent> : null}
            <div className="nsl-modal-actions">
                <Button onClick={onClose} className="nsl-modal-close-btn">
                    Cancel
                </Button>
                {onConfirm ? (
                    <Button onClick={onConfirm} className="nsl-modal-confirm-btn">
                        Ok
                    </Button>
                ) : null}
            </div>
        </Dialog>
    )
}
