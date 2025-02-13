import type { Meta, StoryObj } from '@storybook/react';
import { PDFUploader } from './pdf-uploader';

const meta: Meta<typeof PDFUploader> = {
  title: 'Dashboard/PDFUploader',
  component: PDFUploader,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PDFUploader>;

export const EmptyState: Story = {};

export const FileSelected: Story = {
  parameters: {
    mockData: {
      file: new File([''], 'invoice_sample.pdf', { type: 'application/pdf' }),
    },
  },
};

export const Processing: Story = {
  parameters: {
    mockData: {
      file: new File([''], 'invoice_sample.pdf', { type: 'application/pdf' }),
      isProcessing: true,
    },
  },
};

export const ExtractionComplete: Story = {
  parameters: {
    mockData: {
      file: new File([''], 'invoice_sample.pdf', { type: 'application/pdf' }),
      extractedText: JSON.stringify({
        "Invoice Number": "INV-001",
        "Date": "2023-01-01",
        "Total": "$100.00"
      }, null, 2),
    },
  },
}; 